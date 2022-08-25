using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Traveller.Models;

namespace Traveller.BlogModel
{
    public class TravelModel
    {
        public List<Place> Place { get; set; }
        public Place OnePlace { get; set; }
        public List<Comment> comment { get; set; }
        public Comment OneComment { get; set; }
        public List<Image> Image { get; set; }
        public List<Slider> Slider { get; set; }
    }
}