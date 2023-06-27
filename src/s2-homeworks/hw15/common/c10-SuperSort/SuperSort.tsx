import React from 'react'

import noneImg from '../../common/assets/none.svg'
import upImg from '../../common/assets/up.svg'
import downImg from '../../common/assets/down.svg'

// добавить в проект иконки и импортировать
const downIcon = downImg
const upIcon = upImg
const noneIcon = noneImg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') {
        return down
    }
    if (sort === down) {
        return up
    }
    if (sort === up) {
        return ''
    }
    return down
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />


        </span>
    )
}

export default SuperSort
