import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from 'react-native'
import Container from "../../../components/container";
import OrdermanageListitems from "../../../components/Flatlistitems/OrdermanageListitems/OrdermanageListitems";
import LoadingIndicator from "../../../components/LoadingIndicator";
import { orderListApi } from "../../../utils/apigetService";
import styles from "./Styles";

const OrdermanageLists = () => {
    const [Loading, setLoading] = useState(false);
    const [orderList, setOrderList] = useState([]);

    const ordermanageList = async () => {
        setLoading(true);
        try {
            let response = await orderListApi({ method: 'get' });
            console.log("response", response);

            setLoading(false);

            if (response.status === 'Success') {
                console.log("response of OrderList", response.data);
                setOrderList(response.data);
            } else {
                alert(response.message);
            }
        } catch (error) {
            console.log("errors", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        ordermanageList();
    }, [])

    const renderOrdermanageLists = ({ item }) => {
        return (
            <OrdermanageListitems
                item={item}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <FlatList
                data={orderList}
                renderItem={renderOrdermanageLists}
                keyExtractor={(item) => item.id}
            />
            {Loading ? <LoadingIndicator /> : null}
        </Container>
    )
}

export default OrdermanageLists;