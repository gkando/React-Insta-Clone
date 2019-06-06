import React, { useState } from 'react';
import './SearchBar.css';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';
import logoBundle from '../../ig_bundle.png';
import logoBundle1 from '../../ig_bundle-1.png';

 
const SearchBar = props => {
    const [dropdownOpen, setDropdownOpen] = useState('none');
    
    const toggle = () => {
        console.log('toggled')
        dropdownOpen == 'flex' ? setDropdownOpen('none') : setDropdownOpen('flex');
    }

    const handleLogut = e => {
        localStorage.setItem('user_name', '');
        window.location.reload(); 
    }

const Header = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.0975);
    position: fixed;
    width: 100%;
    height: 77px;
    z-index:1;
    margin-bottom: 6px;
    padding-top: 18px;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 2fr 100px;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    justify-items: center;
    align-items: stretch;

`;

const LogoHeader = styled.div`
    display: flex;
    margin-top: 10px;
    // padding-right: 73px;
`;

const LogoImage = styled.div`
    background-image: url(${logoBundle});
    background-size: 312px 298px;
    background-position: -50px -199px;
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
`;

const LogoTextImage = styled.div`
    background-image: url(${logoBundle});
    background-size: 312px 298px;
    background-position: -92px -71px;
    background-repeat: no-repeat;
    height: 29px;
    width: 103px;
    margin-right: 15px;
`;

const UserButton = styled.div`
    background-image: url(${logoBundle1});
    background-size: 190px 190px;
    background-position: -153px 0px;
    background-repeat: no-repeat;
    height: 30px;
    width: 32px;
    display: flex;
    justify-content: center;
`;

const DropdownContent = styled.div`
    display: ${dropdownOpen};
    position: absolute;
    background-color: #f1f1f1;
    min-width: 120px;
    padding: 20px 0;
    text-align: center;
    margin-top: 34px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    justify-content: center;
    flex-flow: column wrap;
    font-size: .8rem;
    list-style-type:none


`;


    return (
        <Header>
            <LogoHeader>
                <LogoImage>  </LogoImage>
                <div className='divider'></div>
                <LogoTextImage aria-label='Instagram'></LogoTextImage>
            </LogoHeader>
            <div className='search-container'>
                <input className='search-input' placeholder="Search" onKeyDown={props.searchPosts}></input>
            </div>


                <UserButton isOpen={dropdownOpen} onClick={toggle}>
                    <DropdownContent>
                        <strong>Hello {localStorage.getItem('user_name')}</strong>
                        <li id='btn-out' onClick={handleLogut}>Logout</li>
                    </DropdownContent>
                </UserButton>
                
        </Header>

    )
}

export default SearchBar