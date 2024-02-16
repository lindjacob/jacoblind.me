import React from 'react'
import Container from '../../components/Container'
import Dekra from '../../assets/dekra-logo.png';
import Dtails from '../../assets/dtails-logo.svg';
import Connexio from '../../assets/connexio-logo.svg';
import KompetenceKanalen from '../../assets/kompetence-kanalen-logo.svg';

function PreviousPartners() {
    return (
        <section className='py-10 bg-black-secondary'>
            <Container>
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl uppercase text-center'>Previously worked with</h2>
                    <div className='flex flex-wrap mt-6 gap-10 justify-center items-center'>
                        <img src={Dekra} className='w-32 mt-2' />
                        <img src={Dtails} className='w-32' />
                        <img src={KompetenceKanalen} className='w-32' />
                        <img src={Connexio} className='w-32' />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default PreviousPartners
