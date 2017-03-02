import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
} from 'react-native';
import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

const { quotes } = require('./quotes.json');

export default class RelaxationStation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteIndex: 0,
        }

        this.incrementQuoteIndex = this.incrementQuoteIndex.bind(this);
    }

    incrementQuoteIndex() {
        const {quoteIndex} = this.state;
        let newIndex;

        if (quoteIndex + 1 === quotes.length) {
            newIndex = 0
        } else {
            newIndex = quoteIndex + 1;
        }

        this.setState({quoteIndex: newIndex});
    }

    render() {
        const quote = quotes[this.state.quoteIndex];

        return (
            <Navigator
                initialRoute={{ name: 'StartScreen' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                    case 'StartScreen':
                        return <StartScreen onStartHandler={() => navigator.push({ name: 'QuoteScreen' })} />
                    case 'QuoteScreen':
                        return <QuoteScreen 
                            qId={this.state.quoteIndex}
                            text={quote.text} 
                            source={quote.source} 
                            onNextQuotePress={this.incrementQuoteIndex} 
                        />
                    }
                }}
            />
        );
    }
}

AppRegistry.registerComponent('RelaxationStation', () => RelaxationStation);
