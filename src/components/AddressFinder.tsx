import styled from "styled-components"

export default function AddressFinder(){
    const Wrapper = styled.div`
      text-align: center
    `;

    return(
        <Wrapper>
            <h3>Find your address: </h3>
            <iframe
                src="https://www.google.com/maps/embed?pb=!4v1680328208195!6m8!1m7!1spNtMeWATm6eGoiujckg6GA!2m2!1d-37.79895415048843!2d144.9641278600974!3f222.8204324929316!4f3.8191236739388046!5f0.7820865974627469"
                width="700" height="400" allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Wrapper>
    )
}
