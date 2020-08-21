import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }
    return (
        <>
            <Search
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search By Typing..."
            />
        </>
    )
}

export default SearchFeature
