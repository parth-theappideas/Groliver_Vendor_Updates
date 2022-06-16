import React, { useRef } from "react";
import { FlatList, StatusBar } from 'react-native'
import Walletitems from "../../../components/Flatlistitems/Walletitems/Walletitems";
import Addnewaccount from "../../../modals/AddnewAccountModal/Addnewaccount";
import Container from "../../../components/container";
import Withdraw from "../../../modals/WithdrawModal/Withdraw";
import styles from "./Styles";
import Selectaccount from "../../../modals/SelectAccountModal/Selectaccount";

const Wallet = ({ }) => {

    const AddaccountRef = useRef(null);
    const WithdrawRef = useRef(null);
    const SelectaccountRef = useRef(null);

    const onClose = () => {
        AddaccountRef.current?.close();
        WithdrawRef.current?.close();
        SelectaccountRef.current?.close();
    };

    const WalletData = [
        {
            id: 1,
            total_balace: 'Total Balace',
            balace: 2643,
            coin_img: require('../../../assets/images/coin.png'),
            my_bank_acc: 'My Bank Accounts',
            name: 'David John',
            edit_img: require('../../../assets/images/edit2.png'),
            del_img: require('../../../assets/images/delete3.png'),
            acc_num: '**** **** **** 1245',
            expiry_date: '12/2025'
        }
    ]

    const renderWalletitems = ({ item }) => {
        return (
            <Walletitems
                item={item}
                AddaccountRef={AddaccountRef}
                WithdrawRef={WithdrawRef}
                SelectaccountRef={SelectaccountRef}
                onClose={onClose}
            />
        )
    }

    return (
        <Container containerStyle={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />

            <FlatList
                data={WalletData}
                renderItem={renderWalletitems}
                keyExtractor={(item) => item.id}
            />

            <Withdraw
                WithdrawRef={WithdrawRef}
                onClose={onClose}
            />

            <Addnewaccount
                AddaccountRef={AddaccountRef}
                onClose={onClose}
            />

            <Selectaccount
                SelectaccountRef={SelectaccountRef}
                onClose={onClose}
            />

        </Container>
    )
}

export default Wallet;