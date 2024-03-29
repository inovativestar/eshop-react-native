import React from 'react';
import {BackHandler} from 'react-native';
import {Container ,Content, View, Text, Item, Icon} from 'native-base';
import { drawer, categories, base } from './../../assets/styles';
import UserHeader from './../Shared/UserHeader';
import { Actions } from 'react-native-router-flux';
import {setUser} from "../../actions";
import {connect} from "react-redux";
import {_e} from "../../lang";

let lang = 'en';
let pageTitle = _e[lang].settings;

class Settings extends React.Component {
    exitApp() {
        this.props.setUser({
            userId : null,
            name : null,
            mobile : null,
            email: null,
            apiToken : null
        });
        //Actions.replace('splash');
         BackHandler.exitApp();
    }

    render() {
        return (
            <Container>
                <UserHeader title={pageTitle} />
                <Content style={base.contentBg}>
                    <View>
                        <Item style={[drawer.internalItem,drawer.selectedItem]} onPress={() => Actions.push('edit_profile')}>
                            <View style={drawer.newItem}></View>
                            <Text style={drawer.itemTitle}>{_e[lang].edit_profile}</Text>
                            <Icon name="ios-person-outline" style={drawer.itemIcon}/>
                        </Item>
                        <Item style={[drawer.internalItem,drawer.selectedItem]} onPress={() => Actions.replace('home')}>
                            <Text style={drawer.itemTitle}>{_e[lang].fav_addresses}</Text>
                            <Icon name="ios-map-outline" style={drawer.itemIcon}/>
                        </Item>
                        <Item style={[drawer.internalItem,drawer.selectedItem]} onPress={() => Actions.replace('home')}>
                            <Text style={drawer.itemTitle}>{_e[lang].help}</Text>
                            <Icon name="ios-paper-outline" style={drawer.itemIcon}/>
                        </Item>
                        <Item style={[drawer.internalItem,drawer.selectedItem]} onPress={() => this.exitApp()}>
                            <Text style={drawer.itemTitle} >{_e[lang].logout}</Text>
                            <Icon name="ios-log-out-outline" style={drawer.itemIcon}/>
                        </Item>
                    </View>
                    <View style={base.bottomContainer}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                            <Text style={base.smallLink}>سیاستهای حفظ حریم خصوصی</Text>
                            <Text style={base.smallText}> و </Text>
                            <Text style={base.smallLink}>شرایط استفاده </Text>
                        </View>
                        <Text style={base.tinyText}>ورود با شماره تلفن 09364521865</Text>
                        <Text style={base.tinyText}>اپلیکیشن سوپری نسخه 1.0.1</Text>

                        <Text style={base.tinyText}>مدیریت و توسعه توسط: آسان پخش با همکاری گروه فناوری TDE استرالیا</Text>
                        <Text style={base.tinyText}>کلیه فعالیتهای این مجموعه تابع قوانین جمهوری اسلامی ایران می باشد</Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser : user => {
            dispatch(setUser(user))
        }
    }
}

export default connect(null,mapDispatchToProps)(Settings)