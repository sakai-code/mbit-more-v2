let formatMessage = messageData => messageData.defaultMessage;

import microbitMoreIconURL from './entry-icon.png';
import microbitMoreInsetIconURL from './inset-icon.svg';
import microbitMoreConnectionIconURL from './connection-icon.svg';
import microbitMoreConnectionSmallIconURL from './connection-small-icon.svg';

const version = 'v2-0.2.4+α radio';

const translationMap = {
    'en': {
        'gui.extension.microbitMore.description': `Play with all functions of micro:bit with radio. (${version})`
    },
    'ja': {
        'gui.extension.microbitMore.description': `micro:bitのすべての機能で遊ぶ。 (${version})`
    },
    'ja-Hira': {
        'gui.extension.microbitMore.description': `マイクロビットのすべてのきのうであそぶ。 (${version})`
    }
};

const entry = {
    name: 'Microbit More with Radio',
    extensionId: 'microbitMorev2withradio',
    extensionURL: 'https://sakai-labo.github.io/mbit-more-v2-with-radio/dist/microbitMorev2_with_radio.mjs',
    collaborator: 'Yengawa Lab +@ sakai',
    iconURL: microbitMoreIconURL,
    insetIconURL: microbitMoreInsetIconURL,
    get description () {
        return formatMessage({
            defaultMessage: 'Play with all functions of micro:bit.',
            description: "Description for the 'Microbit More' extension",
            id: 'gui.extension.microbitMore.description'
        });
    },
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    internetConnectionRequired: false,
    launchPeripheralConnectionFlow: true,
    useAutoScan: false,
    connectionIconURL: microbitMoreConnectionIconURL,
    connectionSmallIconURL: microbitMoreConnectionSmallIconURL,
    get connectingMessage () {
        return formatMessage({
            defaultMessage: 'Connecting',
            description: 'Message to help people connect to their micro:bit.',
            id: 'gui.extension.microbit.connectingMessage'
        });
    },
    helpLink: 'https://sakai-labo.github.io/microbit-morev2_with_radio.github.io/index-ja.html',
    setFormatMessage: formatter => {
        formatMessage = formatter;
    },
    translationMap: translationMap
};

export {entry}; // loadable-extension needs this line.
export default entry;
