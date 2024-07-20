import { FlatList, ListRenderItem, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Card from '../../components/Card'
import StocksCard from '../../components/StocksCard'
import { colors } from '../../components/colors'
import FloatingBtn from '../../components/FloatingBtn'
import MenuOption from '../../components/MenuOption'
import { menuImages } from '../../components/menuImgs'

import { CartList } from '../../components/CartList'
import { ProductProps } from '../../components/CartList'

const Home = () => {

  const FoodTypes = ['Canned Goods', 'Grains and Pasta', 'Frozen food', 'Baby product']

  const StockType = ['All stock', 'Low stock', 'Expired']

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [activeStk, setActiveStk]=useState<number>(0)

  const [dataList, setDataList]=useState<ProductProps[]>([...CartList])

  // Can be changed to hold the entire product details
  const [delId, setDelId] = useState<number | undefined>(undefined);

  const deleteItemById = ()=> {
    if (delId !== undefined) {
      const filteredData = dataList.filter(item => item.id !== delId);
      setDataList(filteredData);
    }
};

  const renderItem:ListRenderItem<ProductProps>=({item})=>{
    return(
      <Card
        Name={item.itemName}
        brandName={item.brandName}
        source={item.image}
        price={item.price}
        multipleBrand={item.multipleBrand}
        onPress={()=>{
          setModalVisible(true)
          setDelId(item.id)
        }}
      />
    )
  }



  return (
    <View style={styles.container}>

      <View style={styles.foodTypeWrapper}>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={{flexDirection:"row",gap:14,marginTop:10,marginHorizontal:20}}>
            {
              FoodTypes.map((item,idx)=>(
                <Text key={idx} style={{fontSize:14}}>{`${item}`}</Text>
              ))
            }
          </View>
        </ScrollView> 
      </View>
      
      <View>
        <ScrollView 
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.stockContainer}>
                  {
                    StockType.map((item,idx)=>(
                      <StocksCard
                        key={idx}
                        text='All stock'
                        isActive={activeStk===idx?true:false}
                        onPress={()=>setActiveStk(idx)}
                      />
                    ))
                  }
            </View>
        </ScrollView>
      </View>


      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(_,idx)=>idx+''}
        style={{backgroundColor:colors.lightGray}}
      />

      

      <FloatingBtn/>


      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Pressable
          onPress={()=>setModalVisible(false)} 
          style={styles.modalContainer}
        >

          <View style={styles.menuContainer}>
            <MenuOption
              source={menuImages.edit}
              text='Edit stock'
            />
            <MenuOption
              source={menuImages.supllier}
              text='Supplier'
            />
            <MenuOption
              source={menuImages.export}
              text='Export'
            />
            <MenuOption
              source={menuImages.copy}
              text='Duplicate'
            />
            <MenuOption
              source={menuImages.shear}
              text='Shear'
            />
            <MenuOption
              source={menuImages.clock}
              text='View history'
            />
            <MenuOption
              source={menuImages.delete}
              text='Delete'
              onPress={()=>{
                deleteItemById()
                setModalVisible(false)
              }}
              // deleteItemById
            />
            
          </View>

        </Pressable>
      </Modal>
      

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:1
  },
  foodTypeWrapper:{
    height:40,justifyContent:"center",
    // marginBottom:10,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:colors.lightGray,
    backgroundColor:colors.bgWhite
  },
  stockContainer:{
    height:60,flexDirection:"row",
    backgroundColor:colors.bgWhite,
    alignItems:"center",
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:colors.lightGray
  },
  modalContainer:{
    flex:1, 
    // backgroundColor:"gray", 
    // opacity:0.8,
    alignItems:"flex-end",
    justifyContent:"center"
  },
  menuContainer:{
    width:172, height:272, 
    backgroundColor:"#fff", 
    marginRight:20,
    paddingLeft:20,
    paddingVertical:10,
    justifyContent:"space-evenly"
  }
})