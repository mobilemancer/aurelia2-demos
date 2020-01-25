using Newtonsoft.Json.Linq;

class FakeDB
{
    public static dynamic GetDroidsHallOfFame()
    {
        dynamic r2 = new JObject();
        r2.Name = "R2-D2";
        r2.Allegiance = Allegiance.Rebellion;
        r2.ProductLine = ProductLine.RSeries;
        r2.Manufacturer = Manufacturer.IndustrialAutomaton;
        r2.Height = 1.09;
        r2.Mass = 32;
        r2.SensorColor = SensorColor.Red;

        dynamic c3 = new JObject();
        c3.Name = "C-3PO";
        c3.Manufacturer = Manufacturer.CybotGalactica;
        c3.Allegiance = Allegiance.Rebellion;
        c3.Height = 1.71;
        c3.Mass = 75;
        c3.SensorColor = SensorColor.Yellow;

        dynamic ig = new JObject();
        ig.Name = "IG-88B";
        ig.Manufacturer = Manufacturer.HolowanLaboratories;
        ig.Allegiance = Allegiance.FreeAgent;
        ig.Height = 1.96;
        ig.Mass = 140;
        ig.SensorColor = SensorColor.Red;

        dynamic wed = new JObject();
        wed.Name = "WED-15I7";
        wed.Manufacturer = Manufacturer.CybotGalactica;
        wed.Allegiance = Allegiance.Imperial;
        wed.Height = 1;
        wed.Mass = 35;
        wed.SensorColor = SensorColor.Black;
        wed.Biography = "WED15-I7 was known to be fiercely loyal to the Empire. It specialized in extending effective operational life to Imperial machines aboard the original Death Star. It was nicknamed after the septoid, an insect native to the planet Eriadu. Like all other droids aboard the Death Star, WED15-17 was lost when the Rebel Alliance destroyed the battle station during the Battle of Yavin.";
        wed.URL = "https://starwars.fandom.com/wiki/WED15-I7";

        // droid.Tags = new JArray("Real", "OnSale");

        return new JArray(r2, c3, ig, wed);

    }
}

struct Allegiance
{
    internal const string Rebellion = "Rebellion";
    internal const string Imperial = "Imperial";
    internal const string FreeAgent = "FreeAgent";
}

struct ProductLine
{
    internal const string RSeries = "R-Series";
}

struct Manufacturer
{
    internal const string IndustrialAutomaton = "Industrial Automaton";
    internal const string CybotGalactica = "Cybot Galactica";
    internal const string HolowanLaboratories = "Holowan Laboratories";
}

struct SensorColor
{
    internal const string Red = "Red";
    internal const string Yellow = "Yellow";
    internal const string Black = "Black";
}