
#include <iostream>
#include <string>
#include <vector>

// Simulate weather data processing
class WeatherProcessor {
public:
    // Simulate calculating weather trends
    std::string calculateTrend(double temperature) {
        if (temperature > 30) {
            return "Hot";
        } else if (temperature > 20) {
            return "Warm";
        } else if (temperature > 10) {
            return "Cool";
        } else {
            return "Cold";
        }
    }

    // Simulate generating weather alerts
    std::string generateAlert(const std::string& condition) {
        if (condition == "Thunderstorm" || condition == "Heavy Rain") {
            return "Severe Weather Alert: " + condition;
        } else {
            return "No severe weather alerts.";
        }
    }
};

int main() {
    // Example usage of WeatherProcessor
    WeatherProcessor processor;

    double temperature = 25.5;
    std::string condition = "Clear";

    std::string trend = processor.calculateTrend(temperature);
    std::string alert = processor.generateAlert(condition);

    std::cout << "Weather Trend: " << trend << std::endl;
    std::cout << "Weather Alert: " << alert << std::endl;

    return 0;
}