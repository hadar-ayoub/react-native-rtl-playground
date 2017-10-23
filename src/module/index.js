import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native'
import {connect} from 'react-redux'
import StyleSheetFactory from './style'
import strings from './strings'


class Module extends Component {
    render() {
        const styles = StyleSheetFactory.getSheet(this.props.isRTL);
        return template(this, styles);
    }
}
const template = (context,styles) => {
    return (
        <View style={{flex:1}}>
            {content(styles)}
            {changeLAng(context,styles)}
        </View>
    );
};


const  content = (styles) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            {strings.WELCOME}
        </Text>
        <Text style={styles.instructions}>
            {strings.GET_STARTED}
        </Text>
        <Text style={styles.instructions}>
            {strings.POWERED}
        </Text>
    </View>
);

const changeLAng = (context,styles) => (
    <View style={styles.langContainer}>
        <Text style={{alignSelf:'center'}}>{strings.SELECT_LANG}</Text>
        <View style={styles.select}>
            <TouchableOpacity style={{flex: 1, backgroundColor:"#0F05"}} onPress={context.props.changeAR}>
                <Text style={styles.text}>{strings.AR}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1,backgroundColor:"#F005"}} onPress={context.props.changeEN}>
                <Text style={styles.text}>{strings.EN}</Text>
            </TouchableOpacity>
        </View>
    </View>
);




const mapStateToProps = (state) => ({
    isRTL: state.settings.isRTL
});

const mapDispatchToProps = (dispatch) => ({
    changeAR: () => {
        dispatch({type: "CHANGE_TO_AR"})
    },
    changeEN: () => {
        dispatch({type: "CHANGE_TO_EN"})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Module);
