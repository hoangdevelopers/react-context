import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function Item () {
    return (
        <AppContext.Consumer>
            {(context) => {
                return (
                    <div style={{paddingBottom: '10px'}}>
                        <div style={context.colapse ? { height:'20px', background: 'red'} : {height:'10px', background: 'red'}}>
                        
                        </div>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default Item;