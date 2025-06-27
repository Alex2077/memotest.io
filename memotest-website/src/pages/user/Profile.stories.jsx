// src/pages/Profile/Profile.stories.jsx
import Profile from "./Profile";

// Mock data
const mockUser = {
  name: 'John Doe',
  email: 'john@example.com'
};

export default {
  title: 'Pages/Profile',
  component: Profile,
  argTypes: {
    initialData: { control: 'object' },
  },
};

// Template for dynamic props
const Template = (args) => <Profile {...args} />;

// Stories
export const LoggedIn = Template.bind({});
LoggedIn.args = { initialData: mockUser };

/*export const Loading = Template.bind({});
Loading.args = { user: null, isLoading: true, error: null };

export const ErrorState = Template.bind({});
ErrorState.args = { user: null, isLoading: false, error: 'Failed to load profile' };*/