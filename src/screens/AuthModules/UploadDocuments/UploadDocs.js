import React, { useState, useEffect } from 'react'
import { Image, ScrollView, StatusBar } from 'react-native'
import Btn from '../../../components/Btn'
import Container from '../../../components/container'
import Label from '../../../components/Label'
import Images from '../../../const/Images'
import { vs } from '../../../utils/stylesUtils'
import styles from './styles'
import { api_token } from '../../../utils/Globals'
import { profileApi, uploadStatusApi } from '../../../utils/apigetService'
import LoadingIndicator from '../../../components/LoadingIndicator'

const UploadDocs = ({ route, navigation }) => {
    // const [proof, setProof] = useState(false);
    const [AddressProff, setAddressProof] = useState(false);
    const [IDProof, setIDProof] = useState(false);
    const [Loading, setLoading] = useState(false);
    console.log("api of doc-->", api_token);

    const UploadDocsHandler = async () => {
        setLoading(true);
        try {
            let result = await uploadStatusApi({});
            setLoading(false);
            if (result.status === "Success") {
                console.log("Result", result);
                if (AddressProff && route.params?.fromIDProof) {
                    navigation.navigate("Dashboard");
                }
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.log("erros", error);
            setLoading(false);
        }
    }

    const getProof = async () => {
        setLoading(true);
        try {
            let response = await profileApi({});
            if (response.status === "Success") {
                setLoading(false);
                console.log("response of get proof", response);
                setAddressProof(true);
                setIDProof(!true);
            } else {
                alert(response.message);
                setLoading(false);
            }
        } catch (error) {
            console.log("erros", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (route.params?.fromAddressProof) {
            getProof();
        } else if (route.params?.fromIDProof) {
            getProof();
        } else {
            console.log("errors");
        }
    }, [route.params])

    console.log("Idproof", IDProof);

    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} contentContainerStyle={{
            paddingBottom: vs(20)
        }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Container containerStyle={styles.container}>
                <Container containerStyle={styles.container2}>
                    <Image
                        source={Images.upload}
                        style={styles.uploadimg}
                    />
                </Container>

                <Container containerStyle={styles.container3}>
                    <Container onPress={() => navigation.navigate("AddressProff")}>
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>Address Proff</Label>
                            <Container containerStyle={styles.container5}>
                                {AddressProff ?
                                    <Image
                                        source={Images.tick}
                                        style={styles.tickimg}
                                    />
                                    : null}
                                <Image
                                    source={Images.right}
                                    style={styles.rightimg}
                                />
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.container6}>
                    <Container onPress={() => navigation.navigate("IdProff")}>
                        <Container containerStyle={styles.container4}>
                            <Label style={styles.label}>ID Proff</Label>
                            <Container containerStyle={styles.container5}>
                                {route.params?.fromIDProof ?
                                    <Image
                                        source={Images.tick}
                                        style={styles.tickimg}
                                    />
                                    : null}
                                <Image
                                    source={Images.right}
                                    style={styles.rightimg}
                                />
                            </Container>
                        </Container>
                    </Container>
                </Container>

                <Container containerStyle={styles.container7}>
                    <Container containerStyle={{
                        borderWidth: 1,
                        width: "89%",
                        height: vs(150),
                        borderColor: '#f2f2f2',
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {AddressProff == true && route.params?.fromIDProof?
                            <Label style={styles.label2}>Your document has been verified</Label>
                            :
                            <>
                                <Label style={styles.label3}>Waiting for document</Label>
                                <Label style={styles.label3}>verification</Label>
                            </>
                        }
                    </Container>
                </Container>

                <Btn
                    title="Done"
                    btnStyle={{
                        backgroundColor: AddressProff == true && route.params?.fromIDProof ? "#009345" : "grey",
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: vs(20),
                    }}
                    btnHeight={50}
                    textColor={'white'}
                    textSize={14}
                    onPress={() => UploadDocsHandler()}
                />
            </Container>
            {Loading ? <LoadingIndicator /> : null}
        </ScrollView>
    )
}

export default UploadDocs;