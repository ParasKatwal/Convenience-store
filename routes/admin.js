const router = require('express').Router()
const passport = require('passport')
const multer = require('multer')

const User = require('../models/User')


const { forwardAuthenticated, ensureAuthenticated } = require('../config/auth')


// Multer Setup
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20
    },
    fileFilter: fileFilter
})


//  Post an item 
router.route('/:id/post').post(ensureAuthenticated ,upload.single('picture'), (req, res) => {

    const posts = []
    const {name, description, category, price} = req.body
    const picture = req.file.path.replace(/\\/g, '/')

    User.findById(req.params.id).then(user => {
        if(req.user.id !== '5f4de3497e7c738d43075c3c'){
            res.send('You are not an admiin to post data')
        }else{
            const newPost = new Post({
                name,
                picture,
                description,
                category,
                price
            })
        
            categorySlug = slugify(category, {lower: true, strict: true})
        
                // Check if cateory already exists or not
                Category.findOne({slug: categorySlug}).then(data => {
                    if(!data){
                        posts.push(newPost)
        
                        const newCategory = new Category({
                            name: category,
                            slug: categorySlug,
                            posts
                        })
        
                        newCategory.save()
        
                    }else{
                        data.posts.push(newPost)
                        data.save()
                    }
                }).catch(err => res.send(err))
                
            newPost.save().then(post => {
                res.send(post)
            }).catch(err => res.status(500).send('Internal Server error'))
        }
    }).catch(err => res.status(500).send('Server Error'))

})


// router.route('/check/:id').get((req, res) => {
//     const adminID = '5f4de3497e7c738d43075c3c'

//     if(req.params.id !== adminID){
//         res.send('You are not a admin')
//     }else{
//         res.send('You can post and delete data admin')
//     }

// })

router.route('/:postID/delete').get(ensureAuthenticated, (req, res) => {
    if (req.user.id !== '5f4de3497e7c738d43075c3c'){
        res.send('You dont have authorization to delete')
    }else{
        Post.findById(req.params.postID).then(post => {
            if(!post){
                res.send('Invalid url!!!')
            }else{
                post.remove()
                res.send('removed')
            }
        }).catch(err => res.send(err))
    }
})



module.exports = router