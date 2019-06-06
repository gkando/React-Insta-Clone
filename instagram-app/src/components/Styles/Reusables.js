import React from "react";
import styled from "styled-components";

export const UserThumbnail = styled.img`
    width: 2rem;
    border-radius: 50%;
`;

export const UserName = styled.a`
    margin-bottom:.75rem
    font-weight: 600;
    margin-left: 1rem;
    color: #262626;

    :hover {
        text-decoration: none;
        color: #262626;
      }
`;


// .comment-user a, .comment-user a:hover {
//     text-decoration: none;
// }
// color: #262626;    
// overflow: hidden;
// text-overflow: ellipsis;
// white-space: nowrap;
// padding-left: 5px;
// margin-left: -5px;
// margin-right: 4px;