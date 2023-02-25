import styled from 'styled-components'

export const EmployeeDataContainer = styled.tbody`
    padding: 15px 0px;
    border-bottom: solid 1px #EAEAEA;
    display: flex;
`

export const TD = styled.td`
    flex: 1;
    text-align: center;
    color: rgb(47,48,78);
    &.fullname {
        color: rgb(47,48,78);
        font-weight: 1000;
        text-transform: capitalize;

    }
    &.email, &.contact{
        font-weight:  500;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    &.created {
        color: gray !important;
    }

    &.status {
    text-transform: capitalize;
        & > span {
            padding: 5px 10px;
            border-radius: 10px;
            &.active {
                background:rgb(200,247,241);
                color: rgb(68,150,141);
            }
            &.inactive {
                background:#EAEAEA;
                color: gray;
            }
        }
    }
    &.action {
        flex:0.5;
        color: gray;
        position:relative;

        & > .i {
            padding: 5px 8px;
            border-radius: 50%;
            background: rgb(250,250,252);
            cursor: pointer;
        }
    }
`

export const ActionContent = styled.div`
    display: flex;
    flex-direction: column;
    /* padding: 10px 5px; */
    position: absolute;
    background: rgb(250,250,252);
    z-index: 1;
    height: fit-content;
    border-radius: 10px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 30px auto;
    & > span {
        padding: 10px 5px;
        color: rgb(47,48,78);
        cursor: pointer;
    }
`