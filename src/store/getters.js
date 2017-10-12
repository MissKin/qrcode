/**
 * @author Auroral on 2017/9/13 0013.
 */
export default {
  partnersCount(state){
    console.log(state.partners.list.length);
    return state.partners.list.length;
  }
}
