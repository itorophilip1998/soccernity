
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import WebFont from 'webfontloader';
import { getFixturesDay1, getFixturesLive, getFixturesToday, getLegues } from "./store/LiveScores/Fixtures";
import { getCountry } from "./store/LiveScores/Matches";
import { setAuth } from "./store/General";
import { getBlog } from "./store/Blog";
function AppLoader() {
    const dispatch = useDispatch() 
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        dispatch(getLegues())
        dispatch(getFixturesLive())
        dispatch(getFixturesToday())
        dispatch(getFixturesDay1())
        dispatch(getCountry())
        dispatch(setAuth())
        dispatch(getBlog())
        WebFont.load({
            google: {
                families: ['Droid Sans', 'Chilanka']
            }
        });
    }, []);


}

export default AppLoader
