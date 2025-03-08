export const BrowserRouter = ({ children }) => <div>{children}</div>;
export const Routes = ({ children }) => <div>{children}</div>;
export const Route = ({ element }) => <div>{element}</div>;
export const Link = ({ children }) => <span>{children}</span>;
export const useParams = () => ({});
export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: '/' });