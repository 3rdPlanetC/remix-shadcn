import { FC } from "react";
import TeamSelector from "./TeamSelector";

const DashboardHeader : FC = () => {
    return (
        <div className="flex h-16 items-center px-4">
            <TeamSelector />
        </div>
    )
}

export default DashboardHeader