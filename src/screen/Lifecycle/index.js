/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';



export default class Lifecycle extends Component {


//Default methods call all time

    constructor(props) //getInitState method call
    {
        console.log("Constroctor(getInitState) Method Called")
        super(props);
        this.state={count:0}
    }

    componentWillMount()
    {
        console.log("componentWillMount Method Called")
    }

    componentDidMount()
    {
        console.log("componentDidMount Method Called")
    }

    componentWillReceiveProps(nextProps)
    {
        console.log("componentWillReceiveProps Method Called");

    }

//component state change method calls

    shouldComponentUpdate(nextProps,nextState)
    {
        if(JSON.stringify(this.state) === JSON.stringify(nextState)) {
            console.log("NewState  ", nextState);
            console.log("OldState  ", this.state);
            console.log("This value is already set");
            return false;
        }
        else {
            console.log("shouldComponentUpdate Method Called");
            console.log("jSonStringfy  ", JSON.stringify(this.state));
            console.log("NewState  ", nextState);
            console.log("OldState  ", this.state);
            return true;
        }
    }

    componentWillUpdate(nextProps, nextState){

        console.log('componentWillUpdate called');
     //   console.log("NewState  ", nextState.count);
    //    console.log("OldState  ", this.state.count);
    }

    componentDidUpdate(prevProps, prevState){

        console.log('componentDidUpdate called');
     //   console.log("OldState  ", prevState.count);
     //   console.log("NewState ", this.state.count);

    }
    componentWillUnmount()
    {
        console.log('componentWillUnmount called');

    }
    loginClick=()=>{

        this.setState({count: 2})

    };

    render() {
        console.log('Render Method Call');
        return (
            <View>
                <View style={{marginTop:50,alignSelf:'center'}}>
                    <Text>{this.state.count}</Text>
                    <Button onPress={this.loginClick} title="State Change" color="gray"/>
                </View>
            </View>

        );
    }
}

