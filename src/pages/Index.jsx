import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Image, VStack, HStack, Text, Progress, Button } from "@chakra-ui/react";
import { FaChartPie, FaDollarSign, FaShoppingCart, FaArrowRight } from "react-icons/fa";

const Index = () => {
  // Sample data for the dashboard
  const dashboardData = {
    sales: {
      today: 120,
      increase: 5,
    },
    revenue: {
      today: 2400,
      increase: 10,
    },
    visitors: {
      today: 450,
      increase: 20,
    },
    orders: {
      today: 80,
      decrease: 2,
    },
  };

  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={6}>
        Business Dashboard
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem>
          <Stat p={5} boxShadow="md" borderRadius="md" bg="white">
            <StatLabel>Sales Today</StatLabel>
            <HStack>
              <FaShoppingCart />
              <StatNumber>{dashboardData.sales.today}</StatNumber>
            </HStack>
            <StatHelpText>
              <StatArrow type="increase" />
              {dashboardData.sales.increase}% since yesterday
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat p={5} boxShadow="md" borderRadius="md" bg="white">
            <StatLabel>Revenue Today</StatLabel>
            <HStack>
              <FaDollarSign />
              <StatNumber>${dashboardData.revenue.today.toFixed(2)}</StatNumber>
            </HStack>
            <StatHelpText>
              <StatArrow type="increase" />
              {dashboardData.revenue.increase}% since yesterday
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat p={5} boxShadow="md" borderRadius="md" bg="white">
            <StatLabel>Visitors Today</StatLabel>
            <HStack>
              <FaChartPie />
              <StatNumber>{dashboardData.visitors.today}</StatNumber>
            </HStack>
            <StatHelpText>
              <StatArrow type="increase" />
              {dashboardData.visitors.increase}% since yesterday
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat p={5} boxShadow="md" borderRadius="md" bg="white">
            <StatLabel>Orders Today</StatLabel>
            <HStack>
              <FaShoppingCart />
              <StatNumber>{dashboardData.orders.today}</StatNumber>
            </HStack>
            <StatHelpText>
              <StatArrow type="decrease" />
              {dashboardData.orders.decrease}% since yesterday
            </StatHelpText>
          </Stat>
        </GridItem>
      </Grid>

      <VStack spacing={6} align="stretch" mt={10}>
        <Box p={5} boxShadow="md" borderRadius="md" bg="white">
          <Heading as="h3" size="lg" mb={4}>
            Revenue Progress
          </Heading>
          <Text mb={4}>Monthly Goal: $30,000</Text>
          <Progress colorScheme="green" size="lg" value={dashboardData.revenue.today / 300} />
        </Box>
        <Flex justifyContent="space-between" align="center" p={5} boxShadow="md" borderRadius="md" bg="white">
          <Box>
            <Heading as="h3" size="lg">
              New Opportunities
            </Heading>
            <Text color="gray.500">Check the latest business opportunities</Text>
          </Box>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue">
            View All
          </Button>
        </Flex>
      </VStack>
      {/* Replace 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MDkzMDA4Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080' with actual image URL after post-processing */}
      <Image src="https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3MDkzMDA4Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080" mt={10} boxShadow="md" borderRadius="md" />
    </Box>
  );
};

export default Index;
