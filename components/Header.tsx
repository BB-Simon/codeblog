import { PaletteMode } from '@mui/material';
import React, { FC } from 'react'

interface Props {
    mode: PaletteMode
    onChange?: () => void;
}

const Header: FC<Props> = ({ mode, onChange }) => {
    return (
        <div>

        </div>
    )
}

export default Header;