import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

const styles = StyleSheet.create({

});

const PeopleItem = (props) => {
    render() {
        return (
            <View>
                <Image/>
                <Icon/>
                <Text>{props.people.firstName} {props.people.lastName}</Text>
                <Text>{props.people.company}></Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return { people: state.people }
}

export default connect(null, actions)(PeopleItem);