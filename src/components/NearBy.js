import React from 'react'
import NearByCard from './NearByCard'

const NearBy = () => {
    return (
        <div className="near-by">
            <NearByCard
                img="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
                name="Puri"
                distHr="5.5"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240"
                name="Kolkata"
                distHr="4"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/3369e34a-44bf-4e15-9892-330f97031d42.jpg?im_q=medq&im_w=240"
                name="Bolpur"
                distHr="4"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/105b8160-1109-4678-b8aa-367ea9faebea.jpg?im_q=medq&im_w=240"
                name="Diamond Harbour"
                distHr="4"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/926d56aa-8b36-4138-8eae-ad991868b858.jpg?im_q=medq&im_w=240"
                name="Ranchi"
                distHr="6"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/a0eb36e7-b468-4c5e-93b2-819e793563b2.jpg?im_q=medq&im_w=240"
                name="Patna"
                distHr="6"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240"
                name="Varanasi"
                distHr="7"
            />
            <NearByCard
                img="https://a0.muscache.com/im/pictures/558a403a-aeed-4829-83a6-c9b0ccf21866.jpg?im_q=medq&im_w=240"
                name="Bodh Gaya"
                distHr="4.5"
            />
        </div>
    )
}

export default NearBy
