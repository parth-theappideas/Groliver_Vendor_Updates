import React from 'react'
import { Image } from 'react-native'
import Btn from '../../Btn'
import Container from '../../container'
import Label from '../../Label'
import styles from './styles'

const Upcomingitems = ({ item }) => {
    return (
        <Container containerStyle={styles.container}>
            <Container containerStyle={styles.container2}>
                <Container containerStyle={styles.container3}>
                    <Container containerStyle={styles.container4}>
                        <Container containerStyle={styles.container5}>
                            <Image
                                source={item.image}
                                style={styles.person_img}
                            />
                            <Container containerStyle={styles.container6}>
                                <Label style={styles.name_label}>{item.name}</Label>
                                <Label style={styles.phNo_label}>{item.mobileNo}</Label>
                            </Container>
                        </Container>

                        <Container containerStyle={styles.borderStyle}/>

                        <Container containerStyle={styles.container7}>
                            <Image
                                source={item.locationimg}
                                style={styles.location_img}
                            />
                            <Label style={styles.address_label}>{item.address}</Label>
                        </Container>
                    </Container>

                    <Container containerStyle={styles.container8}>
                        <Btn
                            title="Reject"
                            btnStyle={styles.reject_btn}
                            btnHeight={45}
                            textColor={'red'}
                            textSize={14}
                        />
                        <Btn
                            title="Accept"
                            btnStyle={styles.accept_btn}
                            btnHeight={45}
                            textColor={'white'}
                            textSize={14}
                        />
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default Upcomingitems