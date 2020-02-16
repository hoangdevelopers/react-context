import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

function Header () {
    return (
            <AppContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <span>colapse {context.colapse}</span> 
                            <input type="checkbox" defaultChecked={context.colapse} onChange={()=> context.setColapse(!context.colapse)}></input>
                        </div>
                    )
                }}
            </AppContext.Consumer>
    )
}

export default Header;