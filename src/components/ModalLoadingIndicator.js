import React from "react";
import { View, ActivityIndicator, Modal } from "react-native";
import { screenWidth, vs } from "../utils/stylesUtils";

const ModalLoadingIndicator = () => {
    return (
        <Modal>
            <View style={ {
                width: '100%',
                height: '100%',
                flex: 1,
                position: 'absolute',
                backgroundColor: "#fff",
                justifyContent: 'center',
                alignItems: 'center',
            } }>
                <ActivityIndicator
                    size={ 50 }
                    style={ {
                        backgroundColor: "rgba(0,0,0,0.0)",
                    } }
                    color={ "Green" }
                />
            </View>
        </Modal>
    );
};

export default ModalLoadingIndicator;