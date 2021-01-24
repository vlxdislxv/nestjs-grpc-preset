protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_out=. ./proto/*.proto \
--ts_proto_opt=nestJs=true,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false \
--experimental_allow_proto3_optional=true