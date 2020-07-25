import { useGetUser } from '@/actions/user';
import Redirect from '@/components/shared/Redirect';
import { isAuthorizedUser } from '@/utils/auth0';

const withAuth = Component => role => {
  return (props) => {
    const { data, loading } = useGetUser();
    if(loading) {
      return <p> Loading... </p>
    } 
    if (!data) {
        return <Redirect to="/api/v1/user/login" />
    } else {
      if(role && !isAuthorizedUser(data, role)){
        return <Redirect to="/" />
      } 
      return <Component user={data} loading={loading} {...props} />
    }
  }
}

export default withAuth;
