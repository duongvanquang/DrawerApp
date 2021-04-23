import React, { useEffect } from "react";
import {
    View, Text, Image, TouchableOpacity,
    KeyboardAvoidingView, Platform,
    ScrollView, TextInput
} from 'react-native';
import { COLORS, SIZES, icons, images, COLOR, FONTS } from "../constants"
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const isLogin = 'IS_LOGIN'
const Login = ({ navigation }) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [userName, setUserName] = React.useState(false)
    const [password, setPassword] = React.useState(false)
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        try {
            const value = await AsyncStorage.getItem(isLogin)
            if (value !== null && !!value) {
                navigation.navigate("Tabs")
            }
        } catch (e) {
            // error reading value
        }
    }

    async function storeData() {
        try {
            await AsyncStorage.setItem(isLogin, 'value')
        } catch (e) {
            // saving error
        }
    }

    function renderLogo() {
        return (
            <View style={{
                marginTop: SIZES.padding * 5,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={images.wallieLogo}
                    resizeMode="contain"
                    style={{
                        width: '60%'
                    }}
                />
            </View>
        )
    }
    function renderForm() {
        return (
            <View style={{
                marginTop: SIZES.padding * 3,
                marginHorizontal: SIZES.padding * 3
            }}>
                <View style={{
                    marginTop: SIZES.padding * 3
                }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}> Full Name</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding * 3,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white
                        }}
                        placeholder="Enter Full Name"
                        placeholderTextColor={COLORS.white}
                        secureTextEntry={COLORS.white}
                        onChangeText={setUserName}
                    />
                </View>
                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>PassWord</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={{
                        position: 'absolute',
                        right: 0,
                        bottom: 10,
                        height: 30,
                        width: 30
                    }}
                        onPress={() => {
                            setShowPassword(!showPassword)
                        }}
                    >
                        <Image
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    function renderButton() {
        return (
            <View style={{
                flex: 1, flexDirection: 'column',
                margin: SIZES.padding * 3
            }}>
                <View style={{
                    margin: SIZES.padding * 3,
                    marginTop: SIZES.padding
                }}>
                    <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: '#3366FF',
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            if (!userName || !password) {

                                alert("Mày ngu lắm ")
                                return
                            }
                            const body = {
                                username: userName,
                                password: password

                            }
                            axios({
                                method: 'post',
                                url: 'https://appdatphong.herokuapp.com/Login',
                                data: body
                            })
                                .then(function ({ data }) {
                                    if (data?.data?.length !== 0) {
                                        console.log({ data })
                                        storeData()
                                        navigation.navigate("Tabs")
                                    } else {
                                        alert("Mày ngu lắm")
                                    }
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                        }}>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: 20
                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    margin: SIZES.padding * 3,
                    marginTop: SIZES.padding
                }}>
                    <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: COLORS.purple,
                            borderRadius: SIZES.radius / 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={() => {
                            const body = {
                                username: userName,
                                password: password
                            }
                            axios({
                                method: 'post',
                                url: 'https://appdatphong.herokuapp.com/signup',
                                data: body
                            })
                                .then(function ({ data }) {
                                    console.log({ data })
                                    alert("Bạn đã đăng ký thành công")
                                    navigation.navigate("Login")
                                })
                                .catch(function (error) {
                                    console.log(error)
                                })
                        }}>
                        <Text style={{
                            color: COLORS.white,
                            fontSize: 20
                        }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : null}
            style={{ flex: 1 }}>
            <LinearGradient
                colors={[COLORS.lime, COLORS.emerald]}
                style={{
                    flex: 1
                }}
            >
                <ScrollView>
                    {renderLogo()}
                    {renderForm()}
                    {renderButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
}
export default Login;