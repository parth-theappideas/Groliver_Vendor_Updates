import React from "react";
import { View, ActivityIndicator, ScrollView } from "react-native";

const LoadingIndicator = () => {
    return (
            <View style={ {
                width: "100%",
                height: "100%",
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
    );
};

export default LoadingIndicator;