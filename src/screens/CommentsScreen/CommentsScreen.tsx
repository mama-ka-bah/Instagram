import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import comments from "../../assets/data/comments.json";
import Comment from "../../component/Comments";
import Input from "./Input";

export default function CommentsScreen(){
    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={comments}
                renderItem={({item}) => <Comment comment={item} includeDetails />}
                style={{padding: 10}}
            />

            <Input />
        </View>
    )
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
    }
})