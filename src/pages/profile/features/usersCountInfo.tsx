import {Typography} from "@/shared/ui";
import React from "react";
type Props={
    name: string
    count: number
}

export const UsersCountInfo = ({count, name}:Props) => {
    const number =count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return (
        <div>
            <Typography variant={'boldText14'}>{number}</Typography>
            <Typography variant={'regularText14'}>{name}</Typography>
        </div>
    );
};

