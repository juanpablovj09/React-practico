import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
// import useInitialState from '../hooks/useInitialState';

// const API = 'http://localhost:3000/initialState';

const Home = ({ myList, trends, originals}) => {
    // const initialState = useInitialState(API);

    // return initialState.length === 0 ? <h1>Loading...</h1> : (
    return (
        <React.Fragment>
            <Header />
            <Search isHome />
            {myList.length > 0 &&
                <Categories title='Mi Lista'>
                    <Carousel>
                        {myList.map(item =>
                            <CarouselItem 
                            key={item.id} 
                            {...item} 
                            isList />)
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title='Tendencia'>
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>

            <Categories title='Originales de Platzi Video'>
                <Carousel>
                {originals.map(item =>
                        <CarouselItem key={item.id} {...item} />)
                    }
                </Carousel>
            </Categories>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
};

export default connect(mapStateToProps, null)(Home)