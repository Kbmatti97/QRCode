import React from "react";
import {Linking, PermissionsAndroid} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";


class ScannQRCode extends React.Component{
    onSuccess = (e) => {
        Linking
        .openURL(e.data)
        .catch(err => console.error('Erreur survenue', err));
    }

    render() {
        return(
            <QRCodeScanner>
                onRead = {this.onSuccess}
                reactnative = {true}
                permissionDialogMessage = "Besoin d'une permission pour avoir acces à la camera"
                reactivateTimeout={10}
                showMarker={true}
                
            </QRCodeScanner>
        )
    }

}

export default ScannQRCode
