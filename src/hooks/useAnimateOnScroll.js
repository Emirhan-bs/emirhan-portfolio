import { useInView } from "react-intersection-observer";




function UseAnimateOnScroll(options = {}) {
    const {ref, inView} = useInView({
        threshold:0.15,
        triggerOnce:true,
        ...options,
    })
    return {ref, inView}
}
export default UseAnimateOnScroll;