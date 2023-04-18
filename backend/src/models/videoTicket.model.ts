import { DataTypes } from "sequelize";
import {sequelize} from "./main";

const VideoTicket = sequelize.define('videoTicket', {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    ticket: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {timestamps: false,
    createdAt: true,
    updatedAt: false});

export default VideoTicket;