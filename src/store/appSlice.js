import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentText: '',
        firstSymbols: '',
        firstUniqSymbol: ''
    },
    reducers: {
        createText(state, action){
            state.currentText = action.payload;
        },
        findFirstSymbols(state) {
            const text = state.currentText;
            const words = text.split(' ');

            function findUniqSymbol (word) {
                let arraySymbols = word.split('');
                let isUniqSymbol = arraySymbols[0];
                let lastWord = arraySymbols.slice(1);
                
                if(lastWord.find((s) => s === isUniqSymbol )){
                    let otherSymbols = arraySymbols.filter((r) => r !== isUniqSymbol);
                    return findUniqSymbol(otherSymbols.join(''));
                } else {
                    return isUniqSymbol;
                }
            }
            state.firstSymbols = words.map((w) => {
                return (
                    findUniqSymbol(w)
                )
            })
        },
        findFirstUniqSymbol(state){
            state.firstUniqSymbol = state.firstSymbols[0]
        }
    }
})

export const { createText, findFirstSymbols, findFirstUniqSymbol } = appSlice.actions;
export default appSlice.reducer;
