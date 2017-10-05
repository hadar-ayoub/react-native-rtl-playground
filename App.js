/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Switch,
    I18nManager
} from 'react-native';


import i18n from './i18n'


export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            isENSelected: true,
            lang: 'en',
        }
    }

    onLanguageChange() {
        let isRTL = this.state.lang === 'ar';
        I18nManager.forceRTL(!isRTL);
        this.state.lang === 'ar' ? this.setState({lang: 'en'}) : this.setState({lang: 'ar'});
        this.setState({isENSelected: !isRTL});
        i18n.setLanguage(this.state.lang);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {i18n.WELCOME}
                </Text>
                <Text style={styles.instructions}>
                    {i18n.GET_STARTED}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{i18n.AR}</Text>
                    <Switch style={styles.instructions}
                            onValueChange={this.onLanguageChange.bind(this)}
                            value={this.state.isENSelected}/>
                    <Text style={styles.text}>{i18n.EN}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        margin: 10,
    },
    instructions: {
        alignSelf: "center",
        marginBottom: 5,
    },
});
