import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class Quote extends Component {
    render() {
        const quoteText = this.props.quoteText;
        const quoteSource = this.props.quoteSource;
        return (
            <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}>"{quoteText}"</Text>
                <Text style={styles.sourceText}>- {quoteSource}</Text>
            </View>
        );
    }
}

Quote.propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteSource: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    quoteContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    quoteText: {
        fontFamily: (Platform.OS === 'ios')
            ? 'AvenirNext-Bold'
            : 'Roboto',
        fontSize: 36,
        color: '#ffffff',
        marginVertical: 30
    },
    sourceText: {
        fontFamily: (Platform.OS === 'ios')
            ? 'AvenirNext-Bold'
            : 'Roboto',
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'right',
        fontStyle: 'italic'
    }
});

export default Quote;