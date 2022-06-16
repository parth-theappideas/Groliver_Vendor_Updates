import React, { useEffect, useState } from "react";
import { Image } from 'react-native'
import { orderDetailsApi } from "../../../utils/apigetService";
import { vs } from "../../../utils/stylesUtils";
import Btn from "../../Btn";
import Container from "../../container";
import Label from "../../Label";
import styles from "./styles";

const OrderDetailitems = ({ modalizeRef }) => {

    const [showDetails, setShowDetails] = useState([]);

    const orderDetails = async () => {
        let response = await orderDetailsApi({ method: 'get' })
        console.log("response", response);

        if (response.status === 'Success') {
            console.log("response of orderDetails", response.data);
            setShowDetails(response.data);
        } else {
            alert(response.status === 'Fail')
        }
    }

    useEffect(() => {
        orderDetails();
    }, [])

    return (
        <>
            {showDetails.map((item, index) => {
                return (
                    <Container containerStyle={styles.container} key={index}>
                        <Container containerStyle={styles.container2}>
                            <Container containerStyle={styles.container3}>
                                <Label style={styles.label}>{item.users.name}</Label>

                                <Container containerStyle={styles.container4}>
                                    <Label style={styles.label2}>Order ID : </Label>
                                    <Label style={styles.label3}>{item.unique_id}</Label>
                                </Container>

                                <Container containerStyle={styles.container5}>
                                    <Label style={styles.label2}>Order Date : </Label>
                                    <Label style={styles.label3}>{item.accept_date}</Label>
                                </Container>

                                <Container containerStyle={styles.container6}>
                                    <Container containerStyle={styles.container7}>
                                        <Label style={styles.label2}>Status : </Label>
                                        <Label style={styles.label4}>{item.order_status}</Label>
                                    </Container>

                                    <Btn
                                        title="Action"
                                        btnStyle={{
                                            backgroundColor: '#009345',
                                            borderRadius: 5,
                                            justifyContent: 'center',
                                            width: '32%',
                                            height: vs(32)
                                        }}
                                        btnHeight={35}
                                        textColor={'white'}
                                        textSize={14}
                                        onPress={() => modalizeRef.current.open()}
                                    />
                                </Container>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.container8}>
                            <Container containerStyle={styles.container9}>
                                <Label style={styles.label5}>Shipping Address</Label>
                            </Container>

                            <Container containerStyle={styles.container10} />

                            <Container containerStyle={styles.container11}>
                                <Image
                                    source={require('../../../assets/images/location.png')}
                                    style={styles.address_Img}
                                />
                                <Label style={styles.label6}>{item.address.street} , {item.address.address} , {item.address.country}</Label>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.container12}>
                            <Container containerStyle={styles.container13}>
                                <Label style={styles.label7}>Items</Label>
                            </Container>

                            <Container containerStyle={styles.container14} />

                            <Container containerStyle={styles.container15}>
                                <Label style={styles.label8}>{item.order_detail[0].product_detail.name}</Label>
                                {/* <Label style={styles.label9}>{item.item_no2} {item.items_2}</Label> */}
                            </Container>
                        </Container>

                        {/* <Container containerStyle={styles.container16}>
                            <Container containerStyle={styles.container17}>
                                <Label style={styles.label10}>{item.order_summary}</Label>
                            </Container>

                            <Container containerStyle={styles.container18} />

                            <Container containerStyle={styles.container19}>
                                <Label style={styles.label11}>{item.price}</Label>
                                <Label style={styles.label11}>{item.amount}</Label>
                            </Container>

                            <Container containerStyle={styles.container19}>
                                <Label style={styles.label11}>{item.discount}</Label>
                                <Label style={styles.label11}>{item.dis_amount}</Label>
                            </Container>

                            <Container containerStyle={styles.container19}>
                                <Label style={styles.label11}>{item.delivery_charges}</Label>
                                <Label style={styles.label11}>{item.delivery_amount}</Label>
                            </Container>

                            <Container containerStyle={styles.container18} />

                            <Container containerStyle={styles.container19}>
                                <Label style={styles.label12}>{item.total_amount}</Label>
                                <Label style={styles.label12}>{item.tot_amount}</Label>
                            </Container>
                        </Container> */}
                    </Container>
                )
            })}
        </>
    )
}

export default OrderDetailitems;