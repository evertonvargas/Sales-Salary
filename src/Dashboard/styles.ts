import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;

    button{
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    /* button vem com uma border por padrão */
    border: 0; 
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2.5rem;

    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.9);
    }
  }
  }


table{
  width: 100%;
  border-spacing: 0 0.5rem;

  th{
    color: var(--text-body);
    font-weight: 400;
    text-align: left;
    padding: 1rem 2rem;
    font-size: .9rem;
  }

  td{
    padding: 1rem 2rem;
    color: var(--green);
    background: #fff;

    &:first-child{
      color: var(--text-title);
      border-radius: .25rem 0 0 0.25rem;
    }

    &:last-child{
      border-radius: 0 .25rem .25rem 0;
    }
    }
  }

  @media(max-width: 730px){
    div{
      margin-bottom: 0;

      button{
        padding: 0 1rem;
      }
    }

    table{
      th{
        display: none;
      }

      tr{
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        td{
          text-align: center;
        }
      }

    }
  }
`