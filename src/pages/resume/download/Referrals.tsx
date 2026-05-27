import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import { PiHandHeart } from 'react-icons/pi';
import DotLine from './components/DotLine';

export default function Referrals() {
    return (
        <Container>
            <Header
                IconComponent={PiHandHeart}
                title={'Referrals'}
            />

            <div className='flex justify-between gap-4'>
                <div>
                    <h3>Søren Hansen</h3>
                    <DotLine text1={'DEKRA'} text2={'Ecommerce Manager'} />
                    <p>Tel: +45 31531083</p>
                </div>
                <div>
                    <h3>Troels Lund</h3>
                    <DotLine text1={'DEKRA'} text2={'COO'} />
                    <p>Tel: +45 31632030</p>
                </div>
                <div>
                    <h3>Søren Vestergaard</h3>
                    <DotLine text1={'Connexio'} text2={'Director'} />
                    <p>Tel: +45 60386422</p>
                </div>
            </div>
        </Container>
    )
}
