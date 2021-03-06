import Grid from '~/modules/common/components/Grid';
import Page from '~/modules/common/components/Page';
import LeavePlanChartWidget from '~/modules/leave-management/components/LeavePlanChartWidget';
import LeavesTable from '~/modules/leave-management/components/LeavesTable/LeavesTable';
import UrgentLeavesWidget from '~/modules/leave-management/components/UrgentLeavesWidget';

const Dashboard = () => (
  <Page.Content>
    <Grid>
      <Grid.Item span={6}>
        <UrgentLeavesWidget />
      </Grid.Item>
      <Grid.Item span={6}>
        <LeavePlanChartWidget />
      </Grid.Item>
      <Grid.Item span={12}>
        <LeavesTable />
      </Grid.Item>
    </Grid>
  </Page.Content>
);

export default Dashboard;
