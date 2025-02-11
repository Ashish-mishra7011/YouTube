import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile:{
            type:String, 
            required:[true,"A video file is compulsory."]   //Cloud se
        },
        thumbnail:{
            type:String  ,    // cloudinary url
            required:[true,'Thumbnail of the video is mandatory.']
        },
        title:{
            type:String
        },
        description:{
            type:String
        },
        duration:{
            type:Number //cloudinary url
        },
        views:{
            type:Number,
            default:0

        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },
    {
        timestamps:true
    }
);

videoSchema.plugin(mongooseAggregatePaginate); 

export const Video = mongoose.model("Video",videoSchema)