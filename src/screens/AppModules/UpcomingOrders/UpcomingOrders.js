import React, { useState, useEffect } from 'react'
import { FlatList, StatusBar, Image, Pressable } from 'react-native'
import Container from '../../../components/container'
import Upcomingitems from '../../../components/Flatlistitems/Upcomingitems/Upcomingitems'
import InputBox from '../../../components/InputBox'
import Label from '../../../components/Label'
import LoadingIndicator from '../../../components/LoadingIndicator'
import Images from '../../../const/Images'
import { upcomingOrderApi } from '../../../utils/apigetService'
import { ordermanageStatusApi } from '../../../utils/apiServices'
import { api_token } from '../../../utils/Globals'
import { fs, hs, vs } from '../../../utils/stylesUtils'
import styles from './styles'

const UpcomingOrders = ({ navigation }) => {
    const [upComingOrder, setUpComingOrder] = useState([]);
    const [Loading, setLoading] = useState(false);

    const upcomingOrderData = async () => {
        setLoading(true);
        try {
            let response = await upcomingOrderApi({})
            console.log("response of upcomming order->", response);
            setLoading(false);
            if (response.status === "Success") {
                setUpComingOrder(response.data);
            } else {
                console.log("message", response.message)
            }
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
        console.log("upcomming Order", upComingOrder);
    }

    console.log("token of upcomming order", api_token);

    const ordermanageStatus = async () => {
        setLoading(true);
        var formData = new FormData();
        formData.append("order_id", 2);
        formData.append("status", "Accept");
        try {
            let response = await ordermanageStatusApi({ data: formData })
            console.log("response of OrderAccept", response.data);
            setLoading(false);
            if (response.status === "Success") {
                console.log("Success");
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        upcomingOrderData();
        ordermanageStatus();
    }, []);

    const renderUpcoming = ({ item }) => {
        return (
            <Upcomingitems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            {/* <InputBox
                placeholder="Search"
                inputStyle={{
                    maxWidth: '75%'
                }}
                containerStyle={styles.search_input}
                inputHeight={45}
                textSize={14}
                leftIcon={() => <Image source={Images.search_2} style={styles.search_img} />}
            /> */}
            <Container containerStyle={styles.search_input}>
                <Container
                    onPress={() => navigation.navigate("SearchComponent")}
                    leftIcon={() => <Image source={Images.search_2} style={styles.search_img} />}
                    leftLabel={() =>
                        <Label style={{
                            position: 'absolute',
                            left: hs(40),
                            fontSize: fs(13),
                            top: vs(14),
                            color: 'grey'
                        }}>Search</Label>}
                />
            </Container>
            <FlatList
                data={upComingOrder}
                renderItem={renderUpcoming}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    paddingBottom: vs(10)
                }}
            />
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default UpcomingOrders